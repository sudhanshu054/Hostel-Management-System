package com.hostel.management.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import java.time.LocalDate;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "students")
public class Student extends BaseEntity {
  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_id", nullable = false)
  private User user;

  @Column(nullable = false)
  private String phone;

  @Column(nullable = false)
  private String course;

  @Column(nullable = false)
  private Integer year;

  private String guardianName;
  private String guardianPhone;
  private String emergencyContact;
  private String photoUrl;
  private LocalDate joiningDate;
  private LocalDate leavingDate;
}
