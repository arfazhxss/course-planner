import courseData from '@/tests/data.json'

type Course = {
    courseCode: string
    courseName: string
    courseType: "Mandatory" | "Elective"
    unit: number
}

type Semester = {
    term: string
    session: "Fall" | "Spring" | "Summer"
    courses: Course[]
}

const semesters: Semester[] = courseData as Semester[];