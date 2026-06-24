package com.hostel.management.repository;

import com.hostel.management.entity.HostelBlock;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HostelBlockRepository extends JpaRepository<HostelBlock, UUID> {}
