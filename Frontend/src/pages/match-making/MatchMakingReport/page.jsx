import CoupleScore from "@/components/MatchMaking/Summary";
import MatchTable from "@/components/MatchMaking/MatchTable";
export default async function MatchingPage({ searchParams }) {
    const params = await searchParams;
    const partner1Param = params.partner1;
    const partner2Param = params.partner2;
    const name1 = typeof partner1Param === "string" && partner1Param.trim().length > 0
        ? partner1Param.trim()
        : "Partner 1";
    const name2 = typeof partner2Param === "string" && partner2Param.trim().length > 0
        ? partner2Param.trim()
        : "Partner 2";
    return (<div className="flex min-h-screen flex-col items-center gap-12 px-6">
      <CoupleScore name1={name1} name2={name2} summary={`${name1} & ${name2} share a promising karmic resonance. Detailed insights below.`} score={75}/>
      <MatchTable />
    </div>);
}
