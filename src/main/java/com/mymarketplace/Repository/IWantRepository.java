package com.mymarketplace.Repository;

import com.mymarketplace.Entities.IwantEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IWantRepository extends JpaRepository <IwantEntity, Long> {

    List<IwantEntity> findByOwner(String Owner);

//    boolean existsIwantEntitiesBySearcherAndProduct_idAndMatches(String searcher, long product_id, int matches);
    boolean existsByMtachesAndSearcher( int matches, String searcher);

}
