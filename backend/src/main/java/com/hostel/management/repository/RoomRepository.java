package com.hostel.management.repository;

import com.hostel.management.entity.Room;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, UUID> {
  long countByStatus(com.hostel.management.enums.RoomStatus status);
}
