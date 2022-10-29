import { useEffect } from "react";
import { supabase } from "services/supabase";

import PageWrap from "components/PageWrap";

function Dashboard() {
  useEffect(() => {
    const fetchData = async () => {
      await supabase.from("ideas").select();
    };
    fetchData();
  }, []);
  return (
    <PageWrap>
      <h3 className="text-3xl">Dashboard</h3>
    </PageWrap>
  );
}

export default Dashboard;
