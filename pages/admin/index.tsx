import type { NextPage } from "next";
import { AdminPage } from "../../src/components";
import { useQueryGetSignUps } from "../../src/hooks/query/adminSignUp/useQueryGetSignUps";

const Admin: NextPage = () => {
  return <AdminPage />;
};

export default Admin;
