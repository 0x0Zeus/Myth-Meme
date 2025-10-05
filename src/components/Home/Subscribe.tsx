import { basic_url } from "@/stack/stack";
import { Form, Input, message } from "antd";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa6";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const Subscribe = () => {
  const onFinish = (value: any) => {
    if (value.email !== undefined) {
      axios
        .post(`${basic_url}subscribers/subscribe_email/${value.email}`)
        .then(() => {
          message.success("Subscribed your email successfully.");
        })
        .catch((err) => {
          message.error(err.response.data.error);
        });
    }
  };

  return (
    <>
      <div className="subscribe-bg font-spaceGrotesk backdrop-blur-3xl">
        <div className="container mx-auto">
          <div className="mx-auto max-w-[640px] space-y-6 px-4 py-[80px] text-center md:px-0">
            
            <h1 className="text-3xl font-black text-[#FFFFFF]/90 md:text-5xl">
              Subscribe to Myth Memes
            </h1>
            <p className="text-lg text-[#FFFFFF]/70 md:text-xl">
              Sign up to our newsletter to receive timely market updates and
              information on product sales and giveaways.
            </p>
            <Form
              name="nest-messages"
              layout="horizontal"
              labelWrap
              colon={false}
              onFinish={onFinish}
              style={{ maxWidth: 600, margin: "0 auto", marginTop: "36px" }}
              className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-5"
              validateMessages={validateMessages}
            >
              <Form.Item>
                <button
                  type="submit"
                  className="h-[46px] min-w-[160px] rounded-md border border-[#333333] bg-[#0F0F0F] text-white px-4 flex items-center justify-center gap-3 font-medium hover:border-[#666666] transition-colors"
                >
                  Subscribe
                  <FaArrowRight />
                </button>
              </Form.Item>
              <Form.Item
                name={["email"]}
                rules={[{ type: "email", required: true }]}
              >
                <Input
                  size="large"
                  className="h-12 min-w-[280px] rounded-md border border-[#333333] bg-[#0F0F0F] text-base text-[#FFFFFF] placeholder:text-[#FFFFFF]/60"
                  placeholder="Email..."
                />
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
