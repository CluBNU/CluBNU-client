export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">관리자 대시보드</h1>
      <p className="text-slate-500">CluBNU 관리자 페이지에 오신 것을 환영합니다.</p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-xl font-semibold">동아리 통계</h2>
          <p className="text-3xl font-bold">23</p>
          <p className="text-sm text-slate-500">등록된 동아리</p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-xl font-semibold">사용자 통계</h2>
          <p className="text-3xl font-bold">156</p>
          <p className="text-sm text-slate-500">가입한 사용자</p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-xl font-semibold">신규 신청</h2>
          <p className="text-3xl font-bold">5</p>
          <p className="text-sm text-slate-500">승인 대기 중</p>
        </div>
      </div>
    </div>
  );
}
