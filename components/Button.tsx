const Button = ({ text }: { text: string }) => {
  return (
    <button className="bg-white font-bold text-black mx-auto py-3 px-10 rounded-lg hover:bg-opacity-60 transition-all duration-200">
      {text}
    </button>
  );
};

export default Button;
