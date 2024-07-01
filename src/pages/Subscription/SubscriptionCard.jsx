import { Button } from "@/components/ui/button";
import { CheckCircledIcon } from "@radix-ui/react-icons";

const SubscriptionCard = ({ data }) => {
  const { planName, features, planType, price, button } = data;
  return (
    <div className="rounded-xl bg-[#1b1b1b] bg-opacity-20 shadow-[#14173b] shadow-2xl card p-5 space-y-5 w-[18rem] hover:scale-110 transform transition duration-200 ease-in-out">
      <p>{planName}</p>
      <p>
        <span className="text-xl font-semibold">₹ {price}/</span>
        <span>{planType}</span>
        {planType == "Annual" && <p className="text-green-500">30% off</p>}
      </p>
      <Button className="w-full">{button}</Button>
      <div>
        {data.features.map((item) => (
          <div className="flex items-center gap-1">
            <CheckCircledIcon />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionCard;
