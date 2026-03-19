import React, { useState } from 'react';
import { DefaultLayout } from './layouts/DefaultLayout';
import { TopBar } from './components/TopBar';
import { ContextHeader } from './components/ContextHeader';
import { PrimaryWorkspace } from './components/PrimaryWorkspace';
import { SecondaryPanel } from './components/SecondaryPanel';
import { ProofFooter } from './components/ProofFooter';
import { Card } from './components/Card';
import { Button } from './components/Button';
import { Input } from './components/Input';
import type { StatusType } from './types';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState(2);
  const totalSteps = 5;
  const [status, setStatus] = useState<StatusType>('in-progress');
  const [inputValue, setInputValue] = useState('');

  const proofItems = [
    { label: 'UI Built', checked: true },
    { label: 'Logic Working', checked: true },
    { label: 'Test Passed', checked: false },
    { label: 'Deployed', checked: false },
  ];

  return (
    <DefaultLayout
      topBar={
        <TopBar
          appName="Job Notification App"
          currentStep={currentStep}
          totalSteps={totalSteps}
          status={status}
        />
      }
      contextHeader={
        <ContextHeader
          headline="Design System Foundation"
          subtext="A calm, intentional, and cohesive design system for building professional B2C products."
        />
      }
      primaryWorkspace={
        <PrimaryWorkspace>
          <Card>
            <h3>Component Showcase</h3>
            <p>This workspace demonstrates the design system components in action.</p>
          </Card>
          
          <Card>
            <h4>Form Elements</h4>
            <div className="demo-section">
              <Input
                label="Email Address"
                placeholder="Enter your email"
                value={inputValue}
                onChange={setInputValue}
              />
            </div>
            <div className="demo-section">
              <Input
                label="With Error"
                placeholder="Enter text"
                value=""
                onChange={() => {}}
                error="This field is required. Please enter a valid value."
              />
            </div>
          </Card>

          <Card>
            <h4>Button Variants</h4>
            <div className="demo-section demo-buttons">
              <Button variant="primary">Primary Action</Button>
              <Button variant="secondary">Secondary Action</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
          </Card>

          <Card>
            <h4>Status Controls</h4>
            <div className="demo-section demo-buttons">
              <Button 
                variant="secondary" 
                size="sm"
                onClick={() => setStatus('not-started')}
              >
                Set: Not Started
              </Button>
              <Button 
                variant="secondary" 
                size="sm"
                onClick={() => setStatus('in-progress')}
              >
                Set: In Progress
              </Button>
              <Button 
                variant="secondary" 
                size="sm"
                onClick={() => setStatus('shipped')}
              >
                Set: Shipped
              </Button>
            </div>
          </Card>

          <Card>
            <h4>Step Navigation</h4>
            <div className="demo-section demo-buttons">
              <Button 
                variant="secondary" 
                size="sm"
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep <= 1}
              >
                Previous Step
              </Button>
              <Button 
                variant="primary" 
                size="sm"
                onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
                disabled={currentStep >= totalSteps}
              >
                Next Step
              </Button>
            </div>
          </Card>
        </PrimaryWorkspace>
      }
      secondaryPanel={
        <SecondaryPanel
          stepTitle="Current Step"
          explanation="This panel provides context and guidance for the current step. It includes explanations and copyable prompts to help users understand what needs to be done."
          promptText={`Current configuration:
- Step: ${currentStep}/${totalSteps}
- Status: ${status}
- Input: ${inputValue || '(empty)'}`}
        />
      }
      proofFooter={
        <ProofFooter items={proofItems} />
      }
    />
  );
}

export default App;
