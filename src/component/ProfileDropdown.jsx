"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage, Button, Dropdown, Label } from "@heroui/react";
import Link from "next/link";

export function ProfileDropdown({ user }) {
     const handleSingOut = async () => {
            await authClient.signOut();
        }
    return (
        <Dropdown>
            <Button aria-label="Menu" variant="Ghost">
                {user?.name}
            </Button>
            <Dropdown.Popover className="">
                <Dropdown.Menu onAction={(key) => {
                        if (key === "logout") handleSingOut();
                    }}>
                    <Dropdown.Item id="new-file" textValue="New file">
                       <Link href="/my-booking"> <Label>My Booking</Label></Link>
                    </Dropdown.Item>
                    <Dropdown.Item id="copy-link" textValue="Copy link">
                        <Link href="/add-facility"><Label>Add Facility</Label></Link>
                    </Dropdown.Item>
                    <Dropdown.Item id="edit-file" textValue="Edit file">
                        <Link href='/manage-facility'><Label>Manage My Facilities</Label></Link>
                    </Dropdown.Item>
                    <Dropdown.Item id="logout" textValue="logout" variant="danger">
                        <Label>Logout</Label>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
}