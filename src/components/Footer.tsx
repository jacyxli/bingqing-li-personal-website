"use client";

import Link from "next/link";
import GoogleScholarIcon from "./icons/GoogleScholarIcon";
import EmailIcon from "./icons/EmailIcon";
import OrcidIcon from "./icons/OrcidIcon";

export default function Footer() {
  return (
    <footer className="w-full px-8 pb-16 pt-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Bingqing Li. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <Link
            href="mailto:bingqing@vt.edu"
            className="hover:opacity-80 transition-opacity"
            aria-label="Email"
          >
            <EmailIcon size={36} />
          </Link>
          <Link
            href="https://scholar.google.com/citations?hl=en&user=1qRT-MoAAAAJ&view_op=list_works&sortby=pubdate"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Google Scholar Profile"
          >
            <GoogleScholarIcon size={36} />
          </Link>
          <Link
            href="https://orcid.org/0009-0003-4811-2466"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="ORCID Profile"
          >
            <OrcidIcon size={36} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
