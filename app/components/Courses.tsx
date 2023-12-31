import Link from "next/link";
import React from "react";

const Courses = ({ courses }: { courses: any[] }) => {
  return (
    <div className="courses">
      {courses.map((course: any) => (
        <div key={course.id} className="card">
          <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link href={course.link} target="_blank" className="btn">
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  );
};

// async function fetchCourses() {
//   const response = await fetch("http://localhost:3000/api/courses", {
//     next: {
//       revalidate: 0,
//     },
//   });
//   const courses = response.json();
//   return courses;
// }

// const Courses = async () => {
//   const courses = await fetchCourses();
//   return (
//     <div className="courses">
//       {courses.map((course: any) => (
//         <div key={course.id} className="card">
//           <h2>{course.title}</h2>
//           <small>Level: {course.level}</small>
//           <p>{course.description}</p>
//           <Link href={course.link} target="_blank" className="btn">
//             Go To Course
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

export default Courses;
