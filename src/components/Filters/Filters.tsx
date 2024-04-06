import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "@/pages/lib/hooks/hooks";
import {
  selectPage,
  selectSubject,
} from "@/pages/lib/features/selectors/filterSelectors";
import { fetchBooksAsync } from "@/pages/lib/features/books/booksAsyncThunk";

interface Filter {
  title: string;
}

export default function Filters() {
  const subject = useAppSelector(selectSubject);
  const page = useAppSelector(selectPage);
  const dispatch = useAppDispatch();
  const [activeCategory, setActiveCategory] = useState<string>(subject);

  const filtersList: Filter[] = [
    { title: "Architecture" },
    { title: "Art & Fashion" },
    { title: "Biography" },
    { title: "Business" },
    { title: "Crafts & Hobbies" },
    { title: "Drama" },
    { title: "Fiction" },
    { title: "Food & Drink" },
    { title: "Health & Wellbeing" },
    { title: "History & Politics" },
    { title: "Humor" },
    { title: "Poetry" },
    { title: "Psychology" },
    { title: "Science" },
    { title: "Technology" },
    { title: "Travel & Maps" },
  ];

  const handleChangeCategory = (selectedCategory: string) => {
    setActiveCategory(selectedCategory);
    dispatch(fetchBooksAsync({ subject: selectedCategory, page }));
  };

  // useEffect(() => {
  //   dispatch(fetchBooksAsync({ subject: activeCategory, page }));
  // }, [activeCategory, page]);

  return (
    <aside className={styles.filters}>
      {filtersList.map((category, index) => (
        <span
          key={index}
          className={`${styles.filters_link} ${
            activeCategory === category.title ? styles.filters_link_active : ""
          }`}
          onClick={() => handleChangeCategory(category.title)}
        >
          {category.title}
        </span>
      ))}
    </aside>
  );
}
