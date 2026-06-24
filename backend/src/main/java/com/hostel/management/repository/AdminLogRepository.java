package com.hostel.management.repository;

import com.hostel.management.entity.AdminLog;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminLogRepository extends JpaRepository<AdminLog, UUID> {}
