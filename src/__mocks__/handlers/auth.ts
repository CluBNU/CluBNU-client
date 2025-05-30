import { HttpResponse, http } from 'msw';

const authHandler = [
  // 테스트: 서버 컴포넌트
  http.get('http://localhost:8080/api/user', () => {
    return HttpResponse.json({
      data: {
        name: 'w',
        age: 25,
      },
    });
  }),
  // 테스트: 클라이언트 컴포넌트
  http.get('http://api.example.com/api/user', () => {
    return HttpResponse.json({
      data: {
        user: 'w',
      },
    });
  }),
  // 테스트
  http.post(`http://localhost:8080/api/signin`, ({ request }) => {
    return HttpResponse.json(
      {
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyX2lkIiwicm9sZSI6InVzZXIiLCJuYXRpb25hbGl0eSI6IktSIiwicmVnaXN0U3RhdHVzIjoxfQ.JBIJjLvAh1Ptf48u1yc-Z-kgxeLcLswhzWBcJ-ny09M',
      },
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  }),
];

export default authHandler;
