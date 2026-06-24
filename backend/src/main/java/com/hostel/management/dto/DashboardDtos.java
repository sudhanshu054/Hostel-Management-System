package com.hostel.management.dto;

import java.math.BigDecimal;

public class DashboardDtos {
  public record AdminDashboardResponse(
      long totalStudents,
      long occupiedRooms,
      long vacantRooms,
      long pendingComplaints,
      BigDecimal feeCollection,
      double attendanceAverage) {}
}
