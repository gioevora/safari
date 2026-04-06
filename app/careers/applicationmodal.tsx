"use client";
import { Button } from "@heroui/button";
import { Checkbox } from "@heroui/checkbox";
import { Divider } from "@heroui/divider";
import { Input } from "@heroui/input";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";

export default function ApplicationModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        size="sm"
        className="bg-[#007744] text-white ml-auto"
        onPress={onOpen}
      >
        Apply Now
      </Button>
      <Modal size="lg" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 uppercase">
                Applying For Quality Inspector
              </ModalHeader>
              <Divider className="my-2" />
              <ModalBody>
                <div className="space-y-4">
                  <Input label="Full Name" type="text" />
                  <Input label="Email" type="email" />
                  <Input required label="Contact Number" type="text" />
                  <Input label="Upload CV" type="file" />
                  <Checkbox>
                    <p className="text-sm">
                      {" "}
                      By proceeding with this form, you are freely and
                      voluntarily giving your consent to Safari Rent-A-Car, Inc.
                      in collecting and processing your provided data and
                      personal information according to{" "}
                      <span className="font-medium italic text-[#007744]">
                        Safari's Data Privacy Policy and the Philippines Data
                        Privacy Act of 2012.
                      </span>
                    </p>
                  </Checkbox>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button className="bg-[#007744]" color="primary" onPress={onClose}>
                  Submit Application
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
