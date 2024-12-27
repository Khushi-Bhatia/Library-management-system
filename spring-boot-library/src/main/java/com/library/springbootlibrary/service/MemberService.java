package com.library.springbootlibrary.service;

import com.library.springbootlibrary.entity.Member;
import com.library.springbootlibrary.repository.MemberRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberService {

    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    // Retrieve all members
    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    // Save a new member
    public Member saveMember(Member member) {
        return memberRepository.save(member);
    }

    // Update an existing member
    public Member updateMember(Long id, Member memberDetails) {
        Member member = memberRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Member not found with ID: " + id)
        );
        member.setName(memberDetails.getName());
        member.setEmail(memberDetails.getEmail());
        member.setPhone(memberDetails.getPhone());
        return memberRepository.save(member);
    }

    // Delete a member by ID
    public void deleteMember(Long id) {
        memberRepository.deleteById(id);
    }
}
