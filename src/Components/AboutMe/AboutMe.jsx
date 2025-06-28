import { motion } from 'framer-motion';
import { FaBirthdayCake, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { MdOutlineDesignServices } from 'react-icons/md';
import { TbProgress } from 'react-icons/tb';
import { HiLightBulb } from 'react-icons/hi';

const iconStyle = 'text-[#00f7ff] text-lg';
const labelStyle = 'text-[14px] text-gray-400';
const valueStyle = 'text-[14px] text-white';
const cardStyle = 'bg-[#111111] rounded-xl flex gap-4 items-start p-5 md:p-6';

export default function AboutMe() {
  return (
    <section id="about" className="w-full bg-[#000] py-16 px-4 md:px-0">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <h2 className="text-white text-[32px] md:text-[42px] font-bold leading-[1.2] tracking-tight">
            About Me
          </h2>
          <p className="text-[15px] text-gray-400 font-normal">Discover my journey and expertise</p>
        </div>

        {/* Name + Short Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#111111] px-6 py-6 rounded-xl flex flex-col md:flex-row items-start md:items-center gap-4"
        >
          <div className="bg-[#0f2221] w-12 h-12 rounded-full flex items-center justify-center">
            <img src="/icon-user.svg" alt="user" className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h3 className="text-[16px] text-white font-semibold leading-tight">Md. Shahariar Hafiz</h3>
            <p className="text-[14px] text-[#00f7ff] font-medium leading-tight">
              MERN Stack Learner & Frontend Developer
            </p>
            <p className="text-gray-400 text-[13px] leading-relaxed">
              I am a self-taught frontend developer passionate about building modern UI experiences. I've completed over 12 personal and guided projects focusing on responsiveness and design quality.
            </p>
          </div>
        </motion.div>

        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-[#111111] p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <FaBirthdayCake className={iconStyle} />
              <div>
                <p className={labelStyle}>Date of Birth</p>
                <p className={valueStyle}>January 15, 2000</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className={iconStyle} />
              <div>
                <p className={labelStyle}>Email Address</p>
                <p className={valueStyle}>shahariar.dev@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <FaPhoneAlt className={iconStyle} />
              <div>
                <p className={labelStyle}>Phone Number</p>
                <p className={valueStyle}>+880 1700 000000</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className={iconStyle} />
              <div>
                <p className={labelStyle}>Location</p>
                <p className={valueStyle}>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={cardStyle}
          >
            <div className="bg-[#0f2221] p-3 rounded-full">
              <RiCodeSSlashLine className={iconStyle} />
            </div>
            <div>
              <h5 className="text-white text-[15px] font-semibold">Frontend Development</h5>
              <p className="text-gray-400 text-[13px] leading-relaxed">Responsive UIs with React, Tailwind & JS.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={cardStyle}
          >
            <div className="bg-[#0f2221] p-3 rounded-full">
              <MdOutlineDesignServices className={iconStyle} />
            </div>
            <div>
              <h5 className="text-white text-[15px] font-semibold">UI/UX Implementation</h5>
              <p className="text-gray-400 text-[13px] leading-relaxed">Clean & consistent user experiences.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className={cardStyle}
          >
            <div className="bg-[#0f2221] p-3 rounded-full">
              <TbProgress className={iconStyle} />
            </div>
            <div>
              <h5 className="text-white text-[15px] font-semibold">12+ Projects Completed</h5>
              <p className="text-gray-400 text-[13px] leading-relaxed">Built projects across multiple stacks.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className={cardStyle}
          >
            <div className="bg-[#0f2221] p-3 rounded-full">
              <HiLightBulb className={iconStyle} />
            </div>
            <div>
              <h5 className="text-white text-[15px] font-semibold">Always Evolving</h5>
              <p className="text-gray-400 text-[13px] leading-relaxed">Learning modern tools & best practices.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
