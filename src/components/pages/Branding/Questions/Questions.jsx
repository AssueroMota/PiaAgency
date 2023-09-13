import { useState } from 'react';

const questions = [
    {
        title: 'How does your company is expertise in Graphic Design elevate brands and their visual identity?',
        description: 'Our skilled team specializes in Graphic Design that enhances brand recognition and communicates your message effectively through visually captivating designs.',
        label: 'label1'
    },
    {
        title: 'Can you elaborate on how your approach ensures that graphic designs align perfectly with a brand is essence?',
        description: 'We prioritize understanding your brands values and objectives to create designs that not only resonate with your audience but also authentically represent your brand identity.',
        label: 'label2'
    },
    {
        title: 'Could you highlight the collaborative process you offer for crafting unique and impactful graphic designs?',
        description: 'Our collaborative process involves close consultation with you to comprehend your vision and preferences, resulting in custom designs that make a lasting impression.',
        label: 'label3'
    },
    {
        title: "How does your emphasis on creative versatility benefit businesses seeking diverse graphic solutions?",
        description: 'We offer a wide range of creative solutions to cater to your unique needs, ensuring that our graphic designs effectively communicate your brand is message across various platforms',
        label: 'label4'
    },
    {
        title: 'What sets your approach apart in terms of infusing graphic designs with strategic elements for enhanced communication?',
        description: 'Our team integrates strategic design elements that guide viewers attention and convey your brand is message clearly, contributing to more impactful communication.',
        label: 'label5'
    },
    {
        title: 'Can you elaborate on how your graphic designs have helped businesses in increasing engagement and connecting with audiences?',
        description: 'We design with audience engagement in mind, crafting visuals that resonate with viewers and create memorable connections, ultimately driving higher engagement.',
        label: 'label6'
    },
    {
        title: 'Could you explain how your ongoing support ensures consistent branding and fresh graphic designs over time?',
        description: 'We provide ongoing support to maintain consistent branding and offer fresh graphic designs, helping your brand stay relevant and aligned with changing trends.',
        label: 'label7'
    },
    {
        title: 'How do you guarantee that graphic designs seamlessly blend aesthetics and functionality, aligning with your companys values?',
        description: 'We adhere to a design philosophy that balances aesthetics and functionality, creating designs that are visually appealing while serving practical purposes, in line with our commitment to excellence.',
        label: 'label8'
    },
    {
        title: 'In what ways do you leverage the latest design tools and trends to create cutting-edge graphic designs for clients?',
        description: 'We stay updated with the latest design tools and trends, infusing our designs with innovative elements that captivate audiences and provide clients with a competitive edge.',
        label: 'label9'
    }
]

const Questions = () => {
    const [ isLabel, setLabel ] = useState('');

    return (
        <section className="questions" id="questions">
            <div className="questions__col-left">
                <h3 className="title">Frequently asked questions</h3>
                <p className="description">Here are some of our most frequently answered Graphic Design questions and answers.</p>
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