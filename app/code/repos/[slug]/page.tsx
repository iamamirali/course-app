import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import Link from "next/link";
import React, { Suspense } from "react";

const RepoPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="card">
      <Link href={"/code/repos"} className="btn btn-back">
        Back to Repos
      </Link>

      <Suspense fallback={<div>loading repo details...</div>}>
        <Repo name={params.slug} />
      </Suspense>

      <Suspense fallback={<div>loading dirs...</div>}>
        <RepoDirs name={params.slug} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
