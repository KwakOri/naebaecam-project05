/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { SpendingItem } from "./SpendingItem";
import { NoResult, StLink, StUl } from "./SpendingList.styled";

const SpendingList = () => {
  const spendingList = useSelector((state) => state.spendingList.list);
  const selectedMonth = useSelector((state) => state.spendingList.month);

  const filteredSpendingList = spendingList.filter(
    (spending) => new Date(spending.date).getMonth() + 1 === selectedMonth
  );

  // return부분을 두 개로 나누기

  if (filteredSpendingList.length === 0) {
    return (
      <NoResult>
        <p>검색 결과가 없습니다.</p>
      </NoResult>
    );
  }

  return (
    <StUl>
      {filteredSpendingList.map((item) => (
        <li key={item.id}>
          <StLink to={`/detail/${item.id}`}>
            <SpendingItem item={item} />
          </StLink>
        </li>
      ))}
    </StUl>
  );
};

export { SpendingList };
