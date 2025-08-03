import { CodeType } from "@/types/code/code";

export const codes: CodeType[] = [
  {
    id: 1,
    title: "Python 기초 예제",
    student: "1217채근영",
    language: "python",
    description:
      "Python의 기본 함수 정의와 문자열 포맷팅을 익히는 예제입니다. print 함수와 f-string을 사용한 출력 방법을 학습합니다.",
    code: `def hello_world():
    print("Hello, World!")
    return "안녕하세요"

name = "채근영"
print(f"이름: {name}")`,
    likes: 12,
    createdAt: "2024-01-15T09:30:00Z",
    updatedAt: "2024-01-15T09:30:00Z",
    class: "1-1",
    assignment: "Python 기초",
  },
  {
    id: 2,
    title: "리스트 컴프리헨션",
    student: "1217채근영",
    language: "python",
    description:
      "Python의 강력한 기능인 리스트 컴프리헨션을 활용하여 간결하고 효율적인 코드를 작성하는 방법을 학습합니다. 조건부 필터링과 중첩 컴프리헨션을 포함합니다.",
    code: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_squares = [x**2 for x in numbers if x % 2 == 0]
print(f"짝수의 제곱: {even_squares}")

# 중첩 리스트 컴프리헨션
matrix = [[i*j for j in range(1, 4)] for i in range(1, 4)]
print(f"구구단 표: {matrix}")`,
    likes: 25,
    createdAt: "2024-01-18T14:22:00Z",
    updatedAt: "2024-01-18T14:22:00Z",
    class: "1-1",
    assignment: "리스트 컴프리헨션",
  },
  {
    id: 3,
    title: "클래스와 객체",
    student: "1217채근영",
    language: "python",
    description:
      "객체지향 프로그래밍의 기초인 클래스 정의와 객체 생성을 학습합니다. 생성자, 메서드, 인스턴스 변수의 사용법을 익힙니다.",
    code: `class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade
        self.subjects = []
    
    def add_subject(self, subject):
        self.subjects.append(subject)
    
    def get_info(self):
        return f"학생: {self.name}, 학년: {self.grade}"

student1 = Student("채근영", 2)
student1.add_subject("Python")
print(student1.get_info())`,
    likes: 18,
    createdAt: "2024-01-22T16:45:00Z",
    updatedAt: "2024-01-22T16:45:00Z",
    class: "1-2",
    assignment: "클래스와 객체",
  },
  {
    id: 4,
    title: "파일 처리",
    student: "1217채근영",
    language: "python",
    description:
      "JSON 형식의 데이터를 파일로 저장하고 읽어오는 방법을 학습합니다. 한글 인코딩 처리와 예외 처리를 포함한 안전한 파일 조작을 익힙니다.",
    code: `import json

# 데이터 준비
data = {
    "name": "채근영",
    "subjects": ["Python", "JavaScript", "SQL"],
    "scores": {"Python": 95, "JavaScript": 88, "SQL": 92}
}

# JSON 파일로 저장
with open('student_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# JSON 파일 읽기
with open('student_data.json', 'r', encoding='utf-8') as f:
    loaded_data = json.load(f)
    print(f"불러온 데이터: {loaded_data}")`,
    likes: 31,
    createdAt: "2024-01-25T11:30:00Z",
    updatedAt: "2024-01-28T09:20:00Z",
    class: "1-2",
    assignment: "파일 처리",
  },
  {
    id: 5,
    title: "웹 스크래핑",
    student: "1217채근영",
    language: "python",
    description:
      "requests와 BeautifulSoup을 사용하여 웹페이지에서 데이터를 추출하는 웹 스크래핑 기술을 학습합니다. 예외 처리를 통한 안정적인 크롤링 방법을 익힙니다.",
    code: `import requests
from bs4 import BeautifulSoup

def get_weather_info(url):
    try:
        response = requests.get(url)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # 예시: 기온 정보 추출
        temperature = soup.find('span', class_='temperature')
        if temperature:
            print(f"현재 기온: {temperature.text}")
        
    except requests.RequestException as e:
        print(f"요청 오류: {e}")
    except Exception as e:
        print(f"처리 오류: {e}")

# 사용 예시
url = "https://weather.example.com"
get_weather_info(url)`,
    likes: 7,
    createdAt: "2024-02-01T13:15:00Z",
    updatedAt: "2024-02-01T13:15:00Z",
    class: "1-3",
    assignment: "웹 스크래핑",
  },
  {
    id: 6,
    title: "React 컴포넌트",
    student: "1217채근영",
    language: "javascript",
    description:
      "React의 함수형 컴포넌트와 Hook을 활용한 상태 관리 방법을 학습합니다. useState를 사용한 동적 데이터 처리와 이벤트 핸들링을 익힙니다.",
    code: `import React, { useState, useEffect } from 'react';

const StudentProfile = () => {
  const [student, setStudent] = useState({
    name: '채근영',
    grade: 2,
    subjects: []
  });
  
  const [newSubject, setNewSubject] = useState('');

  const addSubject = () => {
    if (newSubject.trim()) {
      setStudent(prev => ({
        ...prev,
        subjects: [...prev.subjects, newSubject]
      }));
      setNewSubject('');
    }
  };

  return (
    <div className="student-profile">
      <h2>{student.name}의 프로필</h2>
      <p>학년: {student.grade}</p>
      
      <div>
        <h3>수강 과목</h3>
        <ul>
          {student.subjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <input
          type="text"
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
          placeholder="새 과목 추가"
        />
        <button onClick={addSubject}>추가</button>
      </div>
    </div>
  );
};

export default StudentProfile;`,
    likes: 42,
    createdAt: "2024-02-05T10:00:00Z",
    updatedAt: "2024-02-08T15:30:00Z",
    class: "1-3",
    assignment: "React 컴포넌트",
  },
  {
    id: 7,
    title: "비동기 처리",
    student: "1217채근영",
    language: "javascript",
    description:
      "JavaScript의 Promise와 async/await를 활용한 비동기 프로그래밍을 학습합니다. 에러 핸들링과 함께 실용적인 비동기 데이터 처리 방법을 익힙니다.",
    code: `// Promise를 사용한 비동기 처리
const fetchStudentData = (studentId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (studentId === '1217') {
        resolve({
          id: '1217',
          name: '채근영',
          subjects: ['Python', 'JavaScript', 'SQL']
        });
      } else {
        reject(new Error('학생을 찾을 수 없습니다.'));
      }
    }, 1000);
  });
};

// async/await 사용
const getStudentInfo = async (studentId) => {
  try {
    console.log('학생 정보를 가져오는 중...');
    const student = await fetchStudentData(studentId);
    console.log('학생 정보:', student);
    return student;
  } catch (error) {
    console.error('오류 발생:', error.message);
  }
};

// 사용 예시
getStudentInfo('1217');`,
    likes: 33,
    createdAt: "2024-02-10T08:45:00Z",
    updatedAt: "2024-02-12T14:20:00Z",
    class: "1-4",
    assignment: "비동기 처리",
  },
  {
    id: 8,
    title: "Express.js 서버",
    student: "1217채근영",
    language: "javascript",
    description:
      "Node.js Express 프레임워크를 사용하여 RESTful API 서버를 구축하는 방법을 학습합니다. 미들웨어 설정, 라우팅, CORS 처리를 포함합니다.",
    code: `const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// 미들웨어 설정
app.use(cors());
app.use(express.json());

// 학생 데이터 (임시)
const students = [
  { id: '1217', name: '채근영', grade: 2, subjects: ['Python', 'JavaScript'] }
];

// 라우트 설정
app.get('/api/students', (req, res) => {
  res.json(students);
});

app.get('/api/students/:id', (req, res) => {
  const student = students.find(s => s.id === req.params.id);
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ error: '학생을 찾을 수 없습니다.' });
  }
});

app.post('/api/students/:id/subjects', (req, res) => {
  const student = students.find(s => s.id === req.params.id);
  if (student) {
    student.subjects.push(req.body.subject);
    res.json(student);
  } else {
    res.status(404).json({ error: '학생을 찾을 수 없습니다.' });
  }
});

app.listen(PORT, () => {
  console.log(\`서버가 포트 \${PORT}에서 실행 중입니다.\`);
});`,
    likes: 28,
    createdAt: "2024-02-15T12:30:00Z",
    updatedAt: "2024-02-15T12:30:00Z",
    class: "1-4",
    assignment: "Express.js 서버",
  },
  {
    id: 9,
    title: "SQL 학생 데이터 조회",
    student: "1217채근영",
    language: "sql",
    description:
      "복합 조건과 JOIN을 활용한 SQL 데이터 조회를 학습합니다. GROUP BY와 집계 함수를 사용하여 의미 있는 데이터 분석을 수행합니다.",
    code: `SELECT 
    s.student_id,
    s.student_name,
    s.grade,
    s.enrollment_date,
    COUNT(sc.subject_id) as subject_count
FROM 
    students s
LEFT JOIN 
    student_courses sc ON s.student_id = sc.student_id
WHERE 
    s.student_name = '채근영'
    AND s.grade >= 2
GROUP BY 
    s.student_id, s.student_name, s.grade, s.enrollment_date
ORDER BY 
    s.enrollment_date DESC;`,
    likes: 16,
    createdAt: "2024-02-18T09:15:00Z",
    updatedAt: "2024-02-20T11:45:00Z",
    class: "1-1",
    assignment: "SQL 학생 데이터 조회",
  },
  {
    id: 10,
    title: "SQL 성적 분석",
    student: "1217채근영",
    language: "sql",
    description:
      "CTE(Common Table Expression)와 윈도우 함수를 활용한 고급 SQL 쿼리를 학습합니다. 성적 데이터의 통계 분석과 순위 계산을 포함합니다.",
    code: `WITH StudentAverage AS (
    SELECT 
        s.student_id,
        s.student_name,
        AVG(g.score) as avg_score,
        COUNT(g.subject_id) as total_subjects
    FROM 
        students s
    JOIN 
        grades g ON s.student_id = g.student_id
    WHERE 
        s.student_name = '채근영'
    GROUP BY 
        s.student_id, s.student_name
),
SubjectGrades AS (
    SELECT 
        sub.subject_name,
        g.score,
        RANK() OVER (PARTITION BY g.subject_id ORDER BY g.score DESC) as rank_in_subject
    FROM 
        grades g
    JOIN 
        subjects sub ON g.subject_id = sub.subject_id
    JOIN 
        students s ON g.student_id = s.student_id
    WHERE 
        s.student_name = '채근영'
)
SELECT 
    sa.student_name,
    sa.avg_score,
    sa.total_subjects,
    sg.subject_name,
    sg.score,
    sg.rank_in_subject
FROM 
    StudentAverage sa
CROSS JOIN 
    SubjectGrades sg;`,
    likes: 39,
    createdAt: "2024-02-22T16:20:00Z",
    updatedAt: "2024-02-25T13:10:00Z",
    class: "1-2",
    assignment: "SQL 성적 분석",
  },
];
