package com.mymarketplace.Repository;


import com.mymarketplace.Entities.IwantEntity;
import com.mymarketplace.Entities.MessagesEntity;
import com.mymarketplace.Entities.ProductEntity;
import com.mymarketplace.Entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Repository
public interface MessagesRepository extends JpaRepository<MessagesEntity, Long> {

    List<MessagesEntity> findBySender(String Sender);

    List<MessagesEntity> findByReceiver(String Receiver);

    List<MessagesEntity> findByProductId (Long ProductId);

    @Query(value = "Select * From messages WHERE product_id Like :product_id and unread = :unread" , nativeQuery = true)
    List<MessagesEntity> findByProductIdAndUnread(Long product_id, int unread);

    @Query(value = "Select * From messages WHERE product_id Like :product_id and receiver = :receiver" , nativeQuery = true)
    List<MessagesEntity> findByProductIdAndReceiver(Long product_id, String receiver);

    @Query(value = "Select * From iwants_matches WHERE searcher Like :searcher and owner like :owner and product_id like :product_id" , nativeQuery = true)
    List<IwantEntity> findByBySearcherAndOwnerAndProduct_id(String searcher, String owner, Long product_id);

    @Query(value = "Select * From MESSAGES WHERE ((sender Like :sender and receiver Like :receiver) or (sender Like :receiver and receiver Like :sender)) and product_id Like :product_id" , nativeQuery = true)
    List<MessagesEntity> findChatForUsers
            (@RequestParam ("sender") String sender,
             @RequestParam ("receiver") String receiver,
             @RequestParam ("product_id") Long product_id);

}
