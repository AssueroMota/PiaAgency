import { useState } from 'react';

const questions = [
    {
        title: 'How does your company is expertise in E-Commerce Website development enhance online businesses?',
        description: 'Our experienced team specializes in creating E-Commerce Websites that seamlessly blend user-friendly design with robust functionality, maximizing the potential for online success.',
        label: 'label1'
    },
    {
        title: 'Can you elaborate on how your approach ensures a smooth and secure online shopping experience for customers?',
        description: 'We prioritize user experience and security, implementing cutting-edge E-Commerce solutions that provide customers with a seamless, trustworthy, and convenient shopping journey.',
        label: 'label2'
    },
    {
        title: 'Could you highlight the collaborative process you offer for crafting customized E-Commerce Websites?',
        description: 'Our collaborative process involves close consultation with you to understand your brand, products, and goals, resulting in an E-Commerce platform that is tailor-made to meet your specific business needs.',
        label: 'label3'
    },
    {
        title: "How does your emphasis on responsive design benefit E-Commerce businesses in reaching a wider audience?",
        description: 'We create responsive E-Commerce Websites that adapt flawlessly to various devices, ensuring that your products are easily accessible and visually appealing to potential customers everywhere.',
        label: 'label4'
    },
    {
        title: 'Can you elaborate on how you enhance E-Commerce Websites to encourage higher conversion rates and sales?',
        description: 'We implement strategic design and user experience elements that guide visitors towards making purchases, resulting in higher conversion rates and ultimately boosting your revenue.',
        label: 'label5'
    },
    {
        title: 'In what ways do you leverage data analytics to optimize E-Commerce Websites and drive growth?',
        description: 'We utilize advanced data analytics tools to gather insights on user behavior and purchasing patterns, allowing us to make informed decisions that drive E-Commerce growth and success.',
        label: 'label6'
    }
]

const Questions = () => {
    const [ isLabel, setLabel ] = useState('');

    return (
        <section className="questions" id="questions">
            <div className="questions__col-left">
                <h3 className="title">Frequently asked questions</h3>
                <p className="description">Here are some of our most frequently answered Web Design questions and answers.</p>
            </div>
            <div className="questions__col-right">
                {questions.map((question,indice) => (
                    <div key={indice} className="question-item">
                        <h1 className={`ask ${isLabel === question.label ? 'open' : 'close'}`} onClick={() => {
                            if(question.label === questions[indice].label){
                                setLabel(question.label);
                            }
                        }}>{question.title}</h1>
                        {
                            isLabel === question.label &&
                                <p className="answer">{question.description}</p>
                        }
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Questions;