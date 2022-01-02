package com.mymarketplace.Repository;


import com.mymarketplace.Entities.MessagesEntity;
import com.mymarketplace.Entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessagesRepository extends JpaRepository<MessagesEntity, Long> {

    List<MessagesEntity> findByFrom(String From);

    List<MessagesEntity> findByTo(String To);


}
