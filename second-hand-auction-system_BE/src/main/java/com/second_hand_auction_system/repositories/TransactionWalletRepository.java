package com.second_hand_auction_system.repositories;

import com.second_hand_auction_system.models.TransactionWallet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionWalletRepository extends JpaRepository<TransactionWallet, Integer> {
}
