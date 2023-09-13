import { useState } from 'react';

const questions = [
    {
        title: 'How does your company is expertise in Web Application development enhance online businesses?',
        description: 'Our skilled team specializes in developing Web Applications that offer seamless user experiences and powerful functionalities, boosting the efficiency and effectiveness of online businesses.',
        label: 'label1'
    },
    {
        title: 'Can you elaborate on how your approach ensures that web applications are tailored to meet each client is unique needs?',
        description: 'We prioritize understanding your business goals and requirements to develop custom web applications that address your specific challenges and provide tailored solutions.',
        label: 'label2'
    },
    {
        title: 'Could you highlight the collaborative process you offer for designing and building user-centric web applications?',
        description: 'Our collaborative process involves close consultation with you to gather insights into user preferences, resulting in web applications that prioritize user experience and engagement.',
        label: 'label3'
    },
    {
        title: "How does your emphasis on responsive design benefit businesses seeking versatile and accessible web applications?",
        description: 'We create responsive web applications that adapt seamlessly to various devices, ensuring consistent functionality and accessibility for users across different platforms.',
        label: 'label4'
    },
    {
        title: 'What sets your approach apart in terms of integrating advanced features and technologies into web applications?',
        description: 'Our team stays at the forefront of technology trends, allowing us to integrate cutting-edge features and functionalities that empower your web applications to deliver exceptional user experiences.',
        label: 'label5'
    },
    {
        title: 'Can you elaborate on how your web applications have helped businesses streamline processes and enhance productivity?',
        description: 'Right from the outset, our philosophy has been to forge deep connections with each client. We approach every project with a bespoke mindset, understanding the unique requirements and delivering tailored solutions. We take pride in breaking away from the one-size-fits-all approach.We design web applications with a focus on optimizing processes and workflows, leading to increased efficiency, reduced manual tasks, and ultimately, improved productivity for your business.',
        label: 'label6'
    }
]

const Questions = () => {
    const [ isLabel, setLabel ] = useState('');

    return (
        <section className="questions" id="questions">
            <div className="questions__col-left">
                <h3 className="title">Frequently asked questions</h3>
                <p className="description">Here are some of our most frequently answered Web Application questions and answers.</p>
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