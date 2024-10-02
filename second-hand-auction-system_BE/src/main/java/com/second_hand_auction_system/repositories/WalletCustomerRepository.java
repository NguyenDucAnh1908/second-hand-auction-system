package com.second_hand_auction_system.repositories;

import com.second_hand_auction_system.models.WalletCustomer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WalletCustomerRepository extends JpaRepository<WalletCustomer, Integer> {
}
