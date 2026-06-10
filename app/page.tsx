import { supabase } from "@/lib/supabase";
import Sidebar from "@/components/Sidebar";
import HeroTile from "@/components/HeroTile";
import ActivityTile from "@/components/ActivityTile";
import CourseCard from "@/components/CourseCard";
import BentoGrid from "@/components/BentoGrid";

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-950">
        <div className="rounded-3xl border border-red-500/20 bg-zinc-900 p-8">
          <h2 className="mb-2 text-xl font-semibold text-red-400">
            Database Error
          </h2>

          <p className="text-zinc-400">
            Failed to load courses from Supabase.
          </p>
        </div>
      </main>
    );
  }

  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      <Sidebar />

      <main className="flex-1 p-6">
        <BentoGrid>
          <div className="lg:col-span-2">
            <HeroTile count={courses?.length || 0} />
          </div>

          <ActivityTile />

          {courses?.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </BentoGrid>
      </main>
    </div>
  );
}