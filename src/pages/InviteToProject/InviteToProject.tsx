import { useLocation, useNavigate } from "react-router-dom";
import { Loading } from "../../components";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { teamApi } from "../../apis";
import { AcceptTeamInviteReqType } from "../../apis/team/team-req.type";
import { toast } from "react-toastify";

const InviteToProject = () => {
  const { search } = useLocation();
  const nav = useNavigate();

  const handleJoinProject = useMutation({
    mutationFn: (data: AcceptTeamInviteReqType) =>
      teamApi.acceptTeamInvite(data)
  });

  useEffect(() => {
    const result = search
      .slice(1)
      .split("&")
      .reduce(
        (acc: { token: string; isApprove: boolean }, cur: string) => {
          if (cur.startsWith("token")) {
            return { ...acc, token: cur.split("=")[1] };
          } else return { ...acc, isApprove: true };
        },
        { token: "", isApprove: true }
      );

    handleJoinProject.mutate(result, {
      onSuccess: () => {
        toast.success("Tham gia dự án thành công");
        nav(`/my-projects`);
      }
    });
  }, []);

  return (
    <div>
      <Loading />
    </div>
  );
};

export default InviteToProject;
