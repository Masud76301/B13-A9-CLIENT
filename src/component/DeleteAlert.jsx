"use client";

import { authClient } from "@/lib/auth-client";
import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";
import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

export function DeleteAlert({facility}) {
    const {_id,facilityName}= facility;
     
    const handleDelete = async()=>{
      const {data:tokenData} = await authClient.token();
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facility/${_id}`,{
            method:"DELETE",
            headers:{
                "content-type":"application/json",
                authorization: `Bearer ${tokenData?.token}`
                 
            }
        });

        const data = await res.json();
        if(data){
          toast.success("Your facility are deleted successful")
        }
        redirect('/all-facilities');

    }
  return (
    <AlertDialog>
      <Button variant="Ghost" className="text-red-500"><FaRegTrashAlt/>Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete facility permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{facilityName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Facility
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}