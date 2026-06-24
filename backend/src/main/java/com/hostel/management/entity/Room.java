package com.hostel.management.entity;

import com.hostel.management.enums.RoomCategory;
import com.hostel.management.enums.RoomStatus;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "rooms")
public class Room extends BaseEntity {
  @Column(nullable = false, unique = true)
  private String number;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "block_id", nullable = false)
  private HostelBlock block;

  @Column(nullable = false)
  private Integer floor;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false)
  private RoomCategory category;

  @Column(nullable = false)
  private Integer capacity;

  @Column(nullable = false)
  private Integer occupied = 0;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false)
  private RoomStatus status = RoomStatus.AVAILABLE;
}
