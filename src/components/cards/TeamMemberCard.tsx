import Image from "next/image";
import type { TeamMember } from "@/data/types";

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-white">
      <div className="relative h-[260px] w-full">
        <Image src={member.photo.url} alt={member.photo.alt} fill sizes="280px" className="object-cover" />
      </div>
      <div className="flex flex-col gap-1 p-5">
        <span className="font-semibold text-body text-ink">{member.name}</span>
        <span className="text-body-sm text-clay">{member.role}</span>
        <p className="mt-2 text-body-sm text-muted">{member.bio}</p>
      </div>
    </div>
  );
}
