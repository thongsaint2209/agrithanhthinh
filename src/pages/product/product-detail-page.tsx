import React, { useEffect, useState, createContext, useContext } from "react";
import { Box } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Orange_1 from "@/assets/images/orange-1.jpg";
import Orange_2 from "@/assets/images/orange-2.png";
import Orange_3 from "@/assets/images/orange-3.jpg";
import Orange_4 from "@/assets/images/orange-4.jpg";
import Buoi_1 from "@/assets/images/Buoi-1.jpg";
import Buoi_2 from "@/assets/images/Buoi-2.jpeg";

import { ProductDetail } from "@/features/product/components/product-detail/product-detail";
import { describe } from "node:test";
const list_product = [
  {
    id: 1,
    images: [
      Orange_1,
      Orange_2,
      Orange_3,
      Orange_4,
      Orange_1,
      Orange_2,
      Orange_3,
      Orange_4,
    ],
    name: "Cam sành",
    price: "100.000đ/kg",
    describe:
      "Có vỏ dày, sần sùi với màu xanh hoặc vàng cam khi chín. Bên trong, tép cam mọng nước, vị ngọt thanh pha chút chua nhẹ, giàu vitamin C, giúp tăng cường sức đề kháng. Đây là loại cam phổ biến dùng để ăn tươi hoặc ép nước, mang đến hương vị đậm đà, sảng khoái.",
    title_detail: ["Chất lượng", "Lợi ích", "Xuất xứ"],
    detail: [
      "Cam sành có vỏ dày, sần sùi. Bên trong, ruột cam mọng nước, vị ngọt thanh , giàu dinh dưỡng. Đây là loại cam được ưa chuộng nhờ hương vị đậm đà và độ tươi ngon tự nhiên.",
      "Giúp tăng cường đề kháng, hỗ trợ tiêu hóa và thanh lọc cơ thể nhờ hàm lượng vitamin và khoáng chất dồi dào. Nước cam sành không chỉ giúp giải nhiệt mà còn mang lại nhiều lợi ích cho sức khỏe, đặc biệt trong việc làm đẹp da và cung cấp năng lượng.",
      "Được trồng chủ yếu tại các vùng có khí hậu thích hợp tại Bình Dương– nơi có thổ nhưỡng và điều kiện tự nhiên lý tưởng để cam phát triển, cho hương vị đậm đà đặc trưng.",
    ],
  },
  {
    id: 2,
    images: [
      Orange_1,
      Orange_2,
      Orange_3,
      Orange_4,
      Orange_1,
      Orange_2,
      Orange_3,
      Orange_4,
    ],
    name: "Quýt đường",
    price: "100.000đ/kg",
    describe:
      "Có vỏ mỏng, trơn láng, dễ bóc, màu vàng tươi khi chín. Thịt quýt mềm, mọng nước, vị ngọt thanh tự nhiên, giàu vitamin C, tốt cho sức khỏe. Quýt đường được yêu thích nhờ hương vị thơm ngon, thích hợp để ăn tươi hoặc ép nước.",
    title_detail: ["Đặc điểm", "Quy trình canh tác", "Mùa thu hoạch"],
    detail: [
      "Có quả tròn, vỏ mỏng và trơn láng, dễ bóc. Khi còn non, vỏ có màu xanh đậm và chuyển dần sang vàng khi chín.",
      "Để trồng quýt đường đạt năng suất cao, cần chọn đất thịt pha, tơi xốp, thoát nước tốt và giàu dinh dưỡng. Thời điểm trồng lý tưởng là vào đầu mùa mưa, khoảng tháng 4-5 dương lịch.",
      "Quýt đường từ khi ra hoa đến thu hoạch khoảng 8-10 tháng. Thời điểm thu hoạch nên vào ngày nắng ráo, khi 1/3 vỏ quả chuyển vàng.",
    ],
  },
  {
    id: 3,
    images: [
      Buoi_1,
      Buoi_2,
      Orange_3,
      Orange_4,
      Orange_1,
      Orange_2,
      Orange_3,
      Orange_4,
    ],
    name: "Bưởi",
    price: "100.000đ/kg",
    describe:
      "Có vỏ dày, màu xanh hoặc vàng tùy loại, múi to, mọng nước, vị ngọt dịu hoặc chua nhẹ. Giàu vitamin C và chất xơ, giúp thanh lọc cơ thể, tăng cường sức khỏe. Bưởi thích hợp để ăn tươi, làm nước ép hoặc chế biến món ăn, mang đến hương vị tươi mát, bổ dưỡng.",
    title_detail: ["Phân loại", "Kích cỡ", "Thị trường tiêu thụ"],
    detail: [
      "Có nhiều loại như bưởi da xanh, bưởi năm roi, bưởi diễn, mỗi loại có hương vị và đặc điểm riêng. Bưởi da xanh có vỏ xanh, múi hồng, vị ngọt thanh; bưởi năm roi vỏ vàng, múi trắng, vị ngọt dịu; bưởi diễn có múi nhỏ, vị ngọt đậm, thơm đặc trưng.",
      "Trái bưởi có trọng lượng trung bình từ 1 – 3 kg, tùy vào giống và điều kiện canh tác. Múi bưởi căng mọng, ít hạt hoặc không hạt, thích hợp để ăn tươi hoặc chế biến thực phẩm.",
      "Bưởi là loại trái cây được ưa chuộng tại thị trường trong nước và xuất khẩu. Ngoài Việt Nam còn được xuất khẩu sang các thị trường khó tính như châu Âu, Mỹ, Trung Quốc, Nhật Bản, nhờ chất lượng cao và đáp ứng tiêu chuẩn an toàn thực phẩm.",
    ],
  },
  {
    id: 4,
    images: [
      Orange_1,
      Orange_2,
      Orange_3,
      Orange_4,
      Orange_1,
      Orange_2,
      Orange_3,
      Orange_4,
    ],
    name: "Quýt hồng",
    price: "100.000đ/kg",
    describe:
      "Có vỏ mỏng, màu vàng cam rực rỡ khi chín, dễ bóc, múi mọng nước, vị ngọt đậm, thơm đặc trưng. Giàu vitamin và khoáng chất, giúp tăng cường sức khỏe và làm đẹp da. Đây là loại quýt được ưa chuộng vào dịp lễ Tết, dùng để ăn tươi hoặc làm quà biếu sang trọng.",
    title_detail: ["Chất lượng", "Lợi ích"],
    detail: [
      "Có vỏ mỏng, màu vàng cam rực rỡ khi chín, dễ bóc, múi căng mọng, vị ngọt đậm và hương thơm đặc trưng.",
      "Giàu vitamin C và khoáng chất, quýt hồng giúp tăng cường sức đề kháng, hỗ trợ tiêu hóa và làm đẹp da. Nhờ hàm lượng nước cao và vị ngọt thanh, đây là loại trái cây lý tưởng để giải khát, cung cấp năng lượng và mang đến cảm giác tươi mát.",
    ],
  },
];

export const ProductDetailPage = () => {
  const navigate = useNavigate();

  const params = useParams();

  const productId = Number(params.sanphamID);

  const { detailId } = useParams();
  const product = list_product.find((item) => item.id === Number(productId));

  return (
    <Box display="flex" flexDirection="column">
      {/* Section 1 */}
      <ProductDetail data={product}></ProductDetail>
    </Box>
  );
};
