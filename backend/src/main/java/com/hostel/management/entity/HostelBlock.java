package com.hostel.management.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "hostel_blocks")
public class HostelBlock extends BaseEntity {
  @Column(nullable = false)
  private String name;

  @Column(nullable = false)
  private Integer floors;
}
