import { useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import api from "../../api/api";
import { CustomLoading } from "../CustomLoading";
import { SpendingItem } from "./SpendingItem";
import { NoResult, StUl } from "./SpendingList.styled";

const SpendingList = () => {
  const navigate = useNavigate();
  const { data: spendingList, isLoading } = useQuery({
    queryKey: ["records"],
    queryFn: () => api.posts.getRecords(),
  });

  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => api.auth.getUser(),
  });

  const selectedMonth = useSelector((state) => state.spendingList.month);

  const filteredSpendingList = spendingList
    ? spendingList.filter(
        (spending) => new Date(spending.date).getMonth() + 1 === selectedMonth
      )
    : [];

  // return부분을 두 개로 나누기

  if (isLoading) {
    return <CustomLoading />;
  }

  if (filteredSpendingList?.length === 0) {
    return (
      <NoResult>
        <p>검색 결과가 없습니다.</p>
      </NoResult>
    );
  }

  return (
    <StUl>
      {filteredSpendingList?.map((item) => (
        <li
          key={item.id}
          onClick={() => {
            if (item.accountId !== user.id) {
              alert("작성자만 조회 가능합니다.");
              return;
            }
            navigate(`/detail/${item.id}`);
          }}
        >
          <SpendingItem item={item} />
        </li>
      ))}
    </StUl>
  );
};

export { SpendingList };
