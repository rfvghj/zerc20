import { useState } from "react";

import {
  ContractBox,
  ContractText,
  Flex,
  HCandLPM,
  ProgressBox,
  TableBc,
  TableBox,
  TableCard,
} from "./style";
import { FormBoxTitle, FormBoxText } from "../form/style";
import {
  Button,
  Input,
  Progress,
  Radio,
  RadioGroup,
  Table,
} from "@douyinfe/semi-ui";
import { IconSearch, IconCopy, IconForward } from "@douyinfe/semi-icons";
import { TabelColumns } from "@/types";

const convertToScientificNotation = (number: number): string => {
  const formattedNumber = number
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return formattedNumber;
};
const strokeArrReverse = [
  { percent: 0, color: "rgb(57, 86, 222)" },
  { percent: 50, color: "#46259E" },
  { percent: 100, color: "rgb(2, 7, 61)" },
];

function MyTable(props: {
  currentPage: number;
  total: number;
  loading: boolean;
  dataSource: TabelColumns[];
  mintClick: (item: TabelColumns) => void;
  search: (str: string) => void;
  typeChange: (type: number) => void;
  pageChange: (page: number) => void;
}) {
  const columns = [
    {
      title: "#",
      dataIndex: "",
      render: (_text: TabelColumns, _record: TabelColumns, index: number) => {
        return <span>{index + 1}</span>;
      },
    },
    {
      title: "Tick",
      dataIndex: "tick",
    },
    {
      title: "Contract",
      dataIndex: "contract",
      render: (text: TabelColumns["contract"]) => {
        return (
          <ContractBox>
            <ContractText>
              {text.slice(0, 5)}
              ...
              {text.slice(-5)}
            </ContractText>
            <IconCopy size={"large"} style={{ marginRight: "5px" }} />
            <IconForward size={"large"} />
          </ContractBox>
        );
      },
    },
    {
      title: "Deploy Time",
      dataIndex: "deployTime",
    },
    {
      title: "TM/LAPM",
      dataIndex: "TMandLAPM",
      render: (text: TabelColumns["TMandLAPM"]) => {
        return (
          <HCandLPM>
            <span className="HC">{convertToScientificNotation(text.TM)}</span>
            <span className="LPM">
              {convertToScientificNotation(text.LAPM)}
            </span>
          </HCandLPM>
        );
      },
    },
    {
      title: "Rollup Size",
      dataIndex: "rollupSize",
    },
    {
      title: "Frozen Time",
      dataIndex: "frozenTime",
    },
    {
      title: "Condition",
      dataIndex: "condition",
    },
    {
      title: "Funding Rate",
      dataIndex: "fundingRate",
      render: (text: TabelColumns["fundingRate"]) => {
        return <span>{text} ETH</span>;
      },
    },
    {
      title: "Progress",
      dataIndex: "progress",
      render: (text: TabelColumns["progress"]) => {
        return (
          <ProgressBox>
            <span className="ProgressNum">{text}%</span>
            <Progress
              percent={text}
              stroke={strokeArrReverse}
              strokeGradient={true}
              width={100}
              aria-label="file download speed"
            />
          </ProgressBox>
        );
      },
    },
    {
      title: "",
      dataIndex: "",
      render: (text: TabelColumns) => {
        return (
          <Button
            onClick={() => {
              props.mintClick(text);
            }}
            theme="solid"
            type="primary"
            style={{ marginRight: 8 }}
          >
            Mint
          </Button>
        );
      },
    },
  ];
  const [input, setInput] = useState("");
  const handlePageChange = (page: number) => {
    props.pageChange(page);
  };
  return (
    <TableBc>
      <TableBox>
        <FormBoxTitle>Mint</FormBoxTitle>
        <FormBoxText>Mint your favorite token!</FormBoxText>

        <FormBoxText>
          Each token gives up administrative rights when it is created!
        </FormBoxText>
        <FormBoxText>
          After the mint finsh, automatically group lp and enter the black hole!
        </FormBoxText>
        <TableCard>
          <Flex>
            <Flex>
              <Input
                style={{ width: 220 }}
                showClear
                placeholder={"Search by tick..."}
                onChange={(e) => setInput(e)}
              ></Input>
              <IconSearch
                onClick={() => {
                  props.search(input);
                }}
                size={"extra-large"}
              />
            </Flex>
            <RadioGroup
              type="button"
              buttonSize="large"
              defaultValue={1}
              aria-label="单选组合示例"
              name="demo-radio-large"
              onChange={(e) => props.typeChange(e.target.value)}
            >
              <Radio value={1}>ALL</Radio>
              <Radio value={2}>In-progress</Radio>
              <Radio value={3}>Ended</Radio>
            </RadioGroup>
          </Flex>
          <Table
            style={{ marginTop: "20px" }}
            columns={columns}
            dataSource={props.dataSource}
            pagination={{
              currentPage: props.currentPage,
              pageSize: 10,
              total: props.total,
              onPageChange: handlePageChange,
            }}
            loading={props.loading}
          />
          ;
        </TableCard>
      </TableBox>
    </TableBc>
  );
}

export default MyTable;
