import Link from "next/link";
import React from "react";
import { TOPICS } from "../../data/site";

export default function TopicIndex() {
  return (
    <div className="topics reveal">
      {TOPICS.map((group) => (
        <div className="topic-col" key={group.group}>
          <h4>{group.group}</h4>
          <ul>
            {group.items.map((item) => (
              <li key={item}>
                <Link href="/signup">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
