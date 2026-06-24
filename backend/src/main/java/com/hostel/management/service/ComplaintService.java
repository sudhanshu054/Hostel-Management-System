package com.hostel.management.service;

import com.hostel.management.dto.ComplaintDtos.ComplaintRequest;
import com.hostel.management.dto.ComplaintDtos.ComplaintResponse;
import com.hostel.management.entity.Complaint;
import com.hostel.management.exception.ResourceNotFoundException;
import com.hostel.management.repository.ComplaintRepository;
import com.hostel.management.repository.StudentRepository;
import java.util.UUID;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ComplaintService {
  private final ComplaintRepository complaintRepository;
  private final StudentRepository studentRepository;

  public ComplaintService(ComplaintRepository complaintRepository, StudentRepository studentRepository) {
    this.complaintRepository = complaintRepository;
    this.studentRepository = studentRepository;
  }

  public Page<ComplaintResponse> list(Pageable pageable) {
    return complaintRepository.findAll(pageable).map(this::map);
  }

  public ComplaintResponse create(UUID studentId, ComplaintRequest request) {
    var student = studentRepository.findById(studentId).orElseThrow(() -> new ResourceNotFoundException("Student not found"));
    Complaint complaint = new Complaint();
    complaint.setStudent(student);
    complaint.setTitle(request.title());
    complaint.setDescription(request.description());
    complaint.setCategory(request.category());
    complaint.setPriority(request.priority() == null ? com.hostel.management.enums.Priority.MEDIUM : request.priority());
    return map(complaintRepository.save(complaint));
  }

  private ComplaintResponse map(Complaint complaint) {
    return new ComplaintResponse(complaint.getId(), complaint.getTitle(), complaint.getCategory(), complaint.getPriority(), complaint.getStatus());
  }
}
