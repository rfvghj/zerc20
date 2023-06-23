import { useState } from "react";
import {
  BTN,
  FormBc,
  FormBox,
  FormBoxText,
  FormBoxText2,
  FormBoxTitle,
  TokenText,
} from "./style";
import { Row, Col, Form, Button } from "@douyinfe/semi-ui";
export interface FromData {
  Tick: string;
  PerAddressMaxMint: number | null;
  PerMintPriceETH: number | null;
  TotalMintCount: number | null;
  limitPerMint: number | null;
  totalSupply: number | null;
}
function MyForm(props: { submit: (fromData: FromData) => void }) {
  const [fromData, setFromData] = useState<FromData>({
    Tick: "",
    limitPerMint: null,
    PerAddressMaxMint: null,
    PerMintPriceETH: null,
    TotalMintCount: null,
    totalSupply: null,
  });

  return (
    <FormBc>
      <FormBox>
        <FormBoxTitle>Deploy</FormBoxTitle>
        <FormBoxText>
          The inscription created by the BERC20 protocol for everyone, the
          automatically created LP enters the black hole, and the ownership of
          the inscription enters the black hole!
        </FormBoxText>

        <FormBoxText>We live for fairness!</FormBoxText>
        <FormBoxText2>Contract open source support verification：</FormBoxText2>
        <TokenText>0xf4b51faa6f429bf06b9f56a89d17bd6cf6f8d6f8</TokenText>

        <Form
          labelPosition="top"
          style={{ padding: "10px" }}
          onValueChange={(v) => setFromData(v)}
          initValues={fromData}
          onSubmit={() => {
            props.submit(fromData);
          }}
          onSubmitFail={() => {
            console.log(2);
          }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Input
                field="Tick"
                label="Token Tick"
                trigger="change"
                rules={[
                  {
                    required: true,
                    message: "not null and length equal 4 char！",
                  },
                  {
                    validator: (rule, value) => value.length >= 4,
                    message: "not null and length equal 4 char！",
                  },
                ]}
              />
            </Col>

            <Col span={12}>
              <Form.InputNumber
                style={{ width: " 100%" }}
                hideButtons
                label="Limit per mint"
                field="limitPerMint"
                trigger="change"
                rules={[
                  { required: true, message: "not null and Greater than 0！" },
                ]}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.InputNumber
                style={{ width: " 100%" }}
                hideButtons
                field="totalSupply"
                label="Token TotalSupply                "
                trigger="change"
                rules={[
                  { required: true, message: "not null and Greater than 0！" },
                ]}
              />
            </Col>

            <Col span={12}>
              <Form.InputNumber
                style={{ width: " 100%" }}
                hideButtons
                field="TotalMintCount"
                label="Token TotalMintCount"
                trigger="change"
                rules={[
                  { required: true, message: "not null and Greater than 0！" },
                  {
                    validator: (rule, value) => {
                      if (fromData.totalSupply) {
                        return fromData.totalSupply / 2 >= value;
                      }
                      return false;
                    },
                    message: "不能大于TotalMintCount",
                  },
                ]}
              />
            </Col>
          </Row>{" "}
          <Row gutter={16}>
            <Col span={12}>
              <Form.InputNumber
                style={{ width: " 100%" }}
                hideButtons
                field="PerAddressMaxMint"
                label="Token PerAddressMaxMint                "
                trigger="change"
                rules={[
                  { required: true, message: "not null and Greater than 0！" },
                ]}
              />
            </Col>

            <Col span={12}>
              <Form.InputNumber
                style={{ width: " 100%" }}
                hideButtons
                field="PerMintPriceETH"
                label="Token PerMintPrice(ETH)"
                trigger="change"
                rules={[
                  { required: true, message: "not null and Greater than 0！" },
                ]}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Button
                type="primary"
                htmlType="submit"
                className="btn-margin-right"
              >
                Deploy
              </Button>
            </Col>
          </Row>
        </Form>
      </FormBox>
    </FormBc>
  );
}

export default MyForm;
