package com.mymarketplace.Repository;

import com.mymarketplace.Entities.ProductEntity;
import com.mymarketplace.Entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository <ProductEntity, Long> {
   ProductEntity findByid(Long id);

   List<ProductEntity> findByOwner(String Owner);

   List<ProductEntity>findByOwnerNotLike(String Owner);

   List<ProductEntity> findByName(String Name);   // the name given to the product (NOT A PERSON)

   @Query(value = "Select * From PRODUCTS WHERE Category Like :Category and Brand Like :Brand and Condi Like :Condi and Owner Like :Owner and Size Like :Size and Color Like :Color and Price <= :Price" , nativeQuery = true)
   List<ProductEntity> findByCategoryLikeAndBrandLikeAndCondiLikeAndOwnerLikeAndSizeLikeAndColorLikeAndPriceLessThanEqual
                        (@Param("Category") String Category,
                         @Param("Brand") String Brand,
                         @Param("Condi") String Condi,
                         @Param("Owner") String Owner,
                         @Param("Size") String Size,
                         @Param("Color") String Color,
                         @Param("Price") Long Price);


//
//   @Query(value = "Select * From PRODUCTS WHERE Category LIKE :Category and (:Brand is not null and Brand LIKE :Brand or :Brand is null and brand like '%')" , nativeQuery = true)
//   // NOT USING This
//   List<ProductEntity> findByCategoryAndBrand(@Param("Category") String Category, @Param("Brand") String Brand );
//

// mini i want 2
//   @Query(value = "Select * From PRODUCTS WHERE Category LIKE :Category and Brand LIKE :Brand" , nativeQuery = true)
//   List<ProductEntity> findByCategoryLikeAndBrandLike(@Param("Category") String Category, @Param("Brand") String Brand );


}



