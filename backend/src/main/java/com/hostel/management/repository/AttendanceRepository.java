package com.hostel.management.repository;

import com.hostel.management.entity.Attendance;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttendanceRepository extends JpaRepository<Attendance, UUID> {}
