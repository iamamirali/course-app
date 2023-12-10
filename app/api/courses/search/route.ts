import { NextRequest, NextResponse } from "next/server";
import courses from './../data.json'

export async function GET(request:
    NextRequest) {
    // const { searchParams} = new URL(request.url)
    const searchParams = request.nextUrl.searchParams
    const nameQuery = searchParams.get('name');
    
    const filteredCourses = courses.filter((course:any)=> {
        return course.title.toLowerCase().includes(nameQuery?.toLowerCase())
    })
    return NextResponse.json(filteredCourses)
}