/* eslint-disable linebreak-style */
import { useState, useEffect } from 'react';

const useSort = (arr = [], isAscentDefault = true) => {
  const [list, setList] = useState(arr);
  const [ascent, setAscent] = useState(isAscentDefault);
  const [sortedList, setSortedList] = useState(arr);

  const sort = (isAscent) => {
    const sortedListRes = list.sort((a, b) => {
      if (!isAscent) {
        return b.price - a.price;
      }
      return a.price - b.price;
    });
    return sortedListRes;
  };

  const refresh = (isAscent = ascent) => {
    if (isAscent !== ascent) {
      setAscent(isAscent);
    }
    setSortedList(sort(isAscent));
  };

  useEffect(() => {
    setSortedList(sort());
  }, [list]);

  return [sortedList, setList, refresh];
};

export default useSort;
