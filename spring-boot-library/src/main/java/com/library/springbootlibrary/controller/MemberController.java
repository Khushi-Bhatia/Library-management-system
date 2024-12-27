package com.library.springbootlibrary.controller;

import com.library.springbootlibrary.entity.Member;
import com.library.springbootlibrary.service.MemberService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/members")
public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    // Retrieve all members
    @GetMapping
    public List<Member> getAllMembers() {
        return memberService.getAllMembers();
    }

    // Create a new member
    @PostMapping
    public Member createMember(@RequestBody Member member) {
        return memberService.saveMember(member);
    }

    // Update an existing member
    @PutMapping("/{id}")
    public Member updateMember(@PathVariable Long id, @RequestBody Member memberDetails) {
        return memberService.updateMember(id, memberDetails);
    }

    // Delete a member
    @DeleteMapping("/{id}")
    public void deleteMember(@PathVariable Long id) {
        memberService.deleteMember(id);
    }
}
