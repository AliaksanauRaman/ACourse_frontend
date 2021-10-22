import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './CoursePage.css';

import { Course } from '../../../../types/course';
import { API_URL } from '../../../../constants/api-url';

type CoursePageUrlParams = {
  readonly courseId: string;
};

export function CoursePage() {
  const [course, setCourse] = useState<Course | null>(null);
  const urlParams = useParams<CoursePageUrlParams>();
  const history = useHistory();

  useEffect(() => {
    fetchCourse(urlParams.courseId)
      .then(setCourse)
      .catch(error => {
        history.push('/page-not-found');
        console.error('ERROR OCCURED!', error);
      });
  }, [urlParams, history]);

  async function fetchCourse(courseId: string): Promise<Course> {
    return fetch(`${API_URL}/courses/${courseId}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Get course by id request was not ok!');
      });
  }

  return (
    <div className="coursePage">
      <div className="coursePageHeader">
        Course page
      </div>
      
      {course &&
        <div>
          <div>{course.title}</div>
          <div>{course.description}</div>
        </div>
      }
    </div>
  );
}
