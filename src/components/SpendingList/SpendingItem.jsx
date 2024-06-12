/* eslint-disable react/prop-types */
import { formatCost } from "@utils";
import { StSpendingItem } from "./SpendingList.styled";

const SpendingItem = ({
  item: { category, date, cost, description, accountId = "noname" },
}) => {
  return (
    <StSpendingItem>
      <div className="info">
        <p className="date">
          {date} | {accountId}
        </p>
        <p className="category">{category}</p>
        <p className="description">{description}</p>
      </div>
      <p className="cost">{formatCost(cost)}원</p>
    </StSpendingItem>
  );
};

export { SpendingItem };
