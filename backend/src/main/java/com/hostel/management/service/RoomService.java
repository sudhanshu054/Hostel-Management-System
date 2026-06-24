package com.hostel.management.service;

import com.hostel.management.dto.RoomDtos.RoomRequest;
import com.hostel.management.dto.RoomDtos.RoomResponse;
import com.hostel.management.entity.HostelBlock;
import com.hostel.management.entity.Room;
import com.hostel.management.exception.ResourceNotFoundException;
import com.hostel.management.repository.HostelBlockRepository;
import com.hostel.management.repository.RoomRepository;
import java.util.UUID;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RoomService {
  private final RoomRepository roomRepository;
  private final HostelBlockRepository blockRepository;

  public RoomService(RoomRepository roomRepository, HostelBlockRepository blockRepository) {
    this.roomRepository = roomRepository;
    this.blockRepository = blockRepository;
  }

  public Page<RoomResponse> list(Pageable pageable) {
    return roomRepository.findAll(pageable).map(this::map);
  }

  @Transactional
  public RoomResponse create(RoomRequest request) {
    HostelBlock block = blockRepository.findAll().stream()
        .filter(item -> item.getName().equalsIgnoreCase(request.blockName()))
        .findFirst()
        .orElseGet(() -> {
          HostelBlock created = new HostelBlock();
          created.setName(request.blockName());
          created.setFloors(Math.max(request.floor() + 1, 1));
          return blockRepository.save(created);
        });
    Room room = new Room();
    room.setNumber(request.number());
    room.setBlock(block);
    room.setFloor(request.floor());
    room.setCategory(request.category());
    room.setCapacity(request.capacity());
    return map(roomRepository.save(room));
  }

  public RoomResponse get(UUID id) {
    return map(roomRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Room not found")));
  }

  private RoomResponse map(Room room) {
    return new RoomResponse(room.getId(), room.getNumber(), room.getBlock().getName(), room.getFloor(), room.getCategory(), room.getCapacity(), room.getOccupied(), room.getStatus());
  }
}
