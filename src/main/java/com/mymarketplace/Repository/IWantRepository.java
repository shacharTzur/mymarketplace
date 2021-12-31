package com.mymarketplace.Repository;

import com.mymarketplace.Entities.IwantEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IWantRepository extends JpaRepository <IwantEntity, Long> {

    List<IwantEntity> findByOwner(String Owner);

    @Query(value = "Select * From iwants_matches WHERE searcher Like :searcher and owner like :owner and product_id like :product_id" , nativeQuery = true)
    List<IwantEntity> findByBySearcherAndOwnerAndProduct_id(String searcher, String owner, Long product_id);


}
