package com.mymarketplace.Repository;

import com.mymarketplace.Entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository <UserEntity, Long> {

    List<UserEntity> findByUsername(String Username);
}